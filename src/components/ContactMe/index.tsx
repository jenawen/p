/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */

import { Flex, Box, Center, fr } from "@prismane/core";
import { useEffect, useState } from "react";
import "./index.css";
import send from "../../assets/send.svg";

export const ContactMe = (props: any) => {
  const { pt } = props;
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [inputW, setInputW] = useState("150%");

  useEffect(() => {
    if (window.innerWidth <= 480) {
      setInputW("90%");
    }
  }, []);

  const form_ep =
    "https://public.herotofu.com/v1/56b70060-178f-11ee-8025-97a9fb2f29da";

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data: any = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(form_ep, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Form response was not ok");
        }
        setSubmitted(true);
      })

      .catch((err) => {
        e.target.submit();
        console.warn(err);
      });
  };

  return (
    <>
      <Flex direction="column" justify="start" align="center">
        <Box w={inputW} pt={pt}>
          <Center py={fr(5)}>
            {" "}
            <div className="title">Contact Me</div>{" "}
          </Center>

          <Flex direction="column">
            <form action={form_ep} onSubmit={handleSubmit} method="POST">
              <input type="text" placeholder="Your name" name="name" required />

              <input type="email" placeholder="Your email" name="email" />

              <textarea
                style={{ height: "100px" }}
                placeholder="Your message"
                name="message"
                required
              />

              <div style={{ textAlign: "center" }}>
                <button type="submit">
                  <Center>
                    Send{" "}
                    <img
                      src={send}
                      style={{ height: "20px", paddingLeft: "5px" }}
                      id="send-icon"
                    />{" "}
                  </Center>
                </button>
                {submitted ? (
                  <>
                    {" "}
                    <p> Thank you! </p> <p> Your message has been sent :) </p>{" "}
                  </>
                ) : null}
              </div>
            </form>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};
