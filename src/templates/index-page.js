/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react/prop-types */
// import { PropTypes } from "prop-types";

import React, { useContext, useState, useEffect } from "react";
import Img from "gatsby-image";
import Typewriter from "typewriter-effect";
import BackgroundSlider from "react-background-slider";
import { graphql } from "gatsby";
import Fade from "react-reveal/Fade";
import { DocumentContext } from "~context/DocumentContext";
import Footer from "~components/Footer";
import ImageCTA from "~components/ImageCTA";
import Layout from "~components/Layout";
import Newsletter from "~components/Newsletter";
import SEO from "~components/SEO";
import { CursorContext } from "~context/CursorContext";

const IndexPage = ({ data, location }) => {
  const { frontmatter } = data.markdownRemark;

  const { cursorCenterDeltaX, cursorCenterDeltaY } = useContext(CursorContext);
  const { scrollTop } = useContext(DocumentContext);

  console.log(cursorCenterDeltaY);

  const [form, setForm] = useState({
    Name: ``,
    Title: ``,
    Zodiac: ``,
    NameOutput: ``,
    TitleOutput: ``,
    ZodiacOutput: ``
  });
  const [ganacheDisBitch, setGanache] = useState(false);
  const [hookExample, setHooksExample] = useState(true);
  const [optimedEmilio, setoptimedEmilio] = useState(false);

  const clearForm = () => {
    setForm({
      Name: ``,
      Title: ``,
      Zodiac: ``,
      NameOutput: ``,
      TitleOutput: ``,
      ZodiacOutput: ``
    });
  };

  const submitForm = () => {
    setForm({
      NameOutput: form.Name,
      TitleOutput: form.Title,
      ZodiacOutput: form.Zodiac
    });
  };

  const handleChange = e => {
    const { name } = e.target;
    const { value } = e.target;

    // `key1`

    // sending work into the black hole
    setForm({
      ...form,
      [name]: value
    });

    // console.log runs too fast
  };

  return (
    <>
      <SEO
        customTitle={frontmatter.title}
        customDescription={frontmatter.seoDescription}
        customKeywords={frontmatter.seoKeywords}
        path={location.pathname}
      />

      <Layout className="backgroundColourChange index-page w-full relative">
        <section className="w-screen h-screen" id="top">
          <figure className="w-full h-90vh absolute pt-10 mt-16 pb-8 px-8 sm:px-0 z-0">
            <BackgroundSlider
              className="w-full h-full z-0 object-cover animation-delay-5 animation-appear-slow"
              images={[
                `https://i.pinimg.com/originals/8a/45/dc/8a45dc879bff6e84980df3bad8d401f7.gif`,
                `https://i.pinimg.com/originals/8e/7f/c1/8e7fc1064c844d7290fe43763cb89ec1.gif `
              ]}
              duration={2}
              transition={1}
            />
          </figure>
        </section>

        <Fade left>
          <section className="w-screen h-screen" id="about">
            <article className="h-full px-10 sm:px-2 py-24 sm:py-20 flex flex-col justify-evenly">
              <h1 className="f2 text-white">
                The last 6* weeks, i've been working with a bunch of crazy
                designers and developers at Love and Money Agency. <br />
                <br />
                They asked me to showcase the things i've learnt over my tenure.
                <br />
                <br />
              </h1>
              <h1 className="f2 text-white flex">
                Things such as:&nbsp;
                <Typewriter
                  options={{
                    strings: [
                      `Gatsby`,
                      `Figma`,
                      `Grid`,
                      `Ganache`,
                      `React`,
                      `SCSS`,
                      `Tailwind`
                    ],
                    autoStart: true,
                    loop: true
                  }}
                />
              </h1>
            </article>
          </section>
        </Fade>

        <section className="mt-16 w-screen">
          <div className="flex flex-col w-full justify-center items-center">
            <h1 className="text-white f4 uppercase"> Timeline*</h1>

            <article
              className="mt-10 w-screen h-screen flex sm:flex-col justify-evenly"
              id="projects"
            >
              <div className="h-screen w-1/2 sm:w-full flex flex-col items-center justify-center border-r-white sm:border-black sticky inset-y-0 ">
                <Fade>
                  <h1 className="text-white f4 uppercase sm:pb-2 w-2/3 text-center mb-3">
                    Week 1 I learnt:
                  </h1>

                  <ul className="w-2/3 p-5 sm:w-full sm:px-4">
                    <li className="tooltip text-white b1 border-b-white w-full py-2 px-1">
                      Who everyone at LAM is and what they do.
                      <span className="tooltiptext">
                        LAM is a branding agency that somehow manages to do
                        98765678 crazy things at once
                      </span>
                    </li>

                    <li className="tooltip text-white b1 border-b-white w-full py-2 px-1">
                      I was introduced to React and Gatsby.
                      <span className="tooltiptext">
                        React and Gatsby are libaries which have built in
                        methods and functions. The methods and functions are
                        ELITE.
                      </span>
                    </li>

                    <li className="tooltip text-white b1 border-b-white w-full py-2 px-1">
                      Tailwind and SCSS.
                      <span className="tooltiptext">
                        Tailwind is a package which makes styling 100000x
                        easier.
                        <br /> SCSS adds a bit of sassyness.
                      </span>
                    </li>

                    <li className="tooltip text-white b1 border-b-white w-full py-2 px-1">
                      How to make a random email signature generator.
                      <span className="tooltiptext">
                        My first project at LAM
                      </span>
                    </li>
                  </ul>
                </Fade>
              </div>

              <div className="w-1/2 flex flex-col justify-center items-center">
                <Fade>
                  <div className="h-screen w-full sm:w-full flex flex-col justify-center items-center">
                    <form className="w-2/3 p-5">
                      <h1 className="text-white underline">Form ting</h1>
                      <label
                        htmlFor="Name"
                        className="w-full relative block py-1 bg-transparent border-b-black text-white border-b-white"
                      >
                        <span>Name: </span>
                        <input
                          className="text-white"
                          id="Name"
                          name="Name"
                          onChange={handleChange}
                          placeholder="Name"
                          type="text"
                          value={form.Name}
                        />
                      </label>

                      <label
                        htmlFor="Title"
                        className="w-full relative block py-1 bg-transparent border-b-black text-white border-b-white"
                      >
                        <span>Title: </span>
                        <input
                          className="text-white"
                          id="Title"
                          name="Title"
                          onChange={handleChange}
                          placeholder="Title"
                          type="text"
                          value={form.Title}
                        />
                      </label>

                      <label
                        htmlFor="Zodiac"
                        className="w-full relative block py-1 bg-transparent border-b-black text-white border-b-white"
                      >
                        <span>Zodiac Sign: </span>
                        <input
                          className="text-white"
                          id="Zodiac"
                          name="Zodiac"
                          onChange={handleChange}
                          placeholder="Zodiac"
                          type="text"
                          value={form.Zodiac}
                        />
                      </label>
                    </form>

                    <div className="w-2/3 px-5 relative flex">
                      <button
                        type="button"
                        className="w-24 h-12 border-white rounded-md"
                        onClick={submitForm}
                      >
                        <span className="text-white">Submit</span>
                      </button>

                      <button
                        type="button"
                        className="w-24 ml-5 h-12 border-white rounded-md"
                        onClick={clearForm}
                      >
                        <span className="text-white">Clear Form</span>
                      </button>
                    </div>

                    <div className="w-2/3 p-5 border-b-white">
                      <p className="text-white ">
                        {form.NameOutput}
                        {form.NameOutput === `` ? `` : ` is a slippery `}
                        {form.TitleOutput}
                        {form.TitleOutput === ``
                          ? ``
                          : ` who filled his starship with eggs after his `}
                        {form.ZodiacOutput}
                        {form.TitleOutput === ``
                          ? ``
                          : ` tendancies were unveiled`}
                      </p>
                    </div>
                  </div>
                </Fade>
              </div>
            </article>

            <article className="w-screen h-screen flex sm:flex-col-reverse justify-center">
              <div className="flex-col flex w-1/2 justify-center">
                <div className="h-screen w-full sm:w-full flex justify-center items-center border-r-white sm:border-black">
                  <Fade>
                    <figure className="w-2/3 p-10 sm:p-2 sm:-mt-5">
                      <img
                        className={`${ganacheDisBitch ? `ganacheImage` : ``}`}
                        src="uploads/whatthebork.jpg"
                        alt="test"
                      ></img>
                    </figure>
                  </Fade>
                </div>
              </div>

              <Fade>
                <div className="h-screen w-1/2 sm:w-full flex flex-col items-center justify-center sticky inset-y-0 border-l-white">
                  <h1
                    className={`text-white f4 uppercase sm:pb-2 w-2/3 text-center ${
                      ganacheDisBitch ? `ganacheImage` : ``
                    }`}
                  >
                    Week 2 I learnt:
                  </h1>

                  <ul className="w-2/3 p-5 sm:w-full sm:px-4">
                    <li
                      className={`tooltip text-white b1 border-b-white w-full py-2 px-1 ${
                        ganacheDisBitch ? `ganacheImage` : ``
                      }`}
                    >
                      Grids are the best.
                      <span className="tooltiptext">
                        Grids make positioning and styling things a lot easier.
                      </span>
                    </li>

                    <li
                      className={`tooltip text-white b1 border-b-white w-full py-2 px-1 ${
                        ganacheDisBitch ? `ganacheImage` : ``
                      }`}
                    >
                      How to create new pages in Gatsby.
                      <span className="tooltiptext">
                        A single internet page actually is built up of several
                        code pages. We need markdown for data, JSX for the view,
                        SCSS for styling.
                      </span>
                    </li>

                    <li
                      className={`tooltip text-white b1 border-b-white w-full py-2 px-1 ${
                        ganacheDisBitch ? `ganacheImage` : ``
                      }`}
                    >
                      How to style within SCSS classes.
                      <span className="tooltiptext">
                        Nesting stuff inside stuff. Sassy.
                      </span>
                    </li>

                    <li
                      className={`tooltip text-white b1 border-b-white w-full py-2 px-1 ${
                        ganacheDisBitch ? `ganacheImage` : ``
                      }`}
                    >
                      How to intergrate markdown language into Gatbsy.
                      <span className="tooltiptext">YAML + GraphQl</span>
                    </li>

                    <li
                      className={`tooltip text-white b1 border-b-white w-full py-2 px-1 ${
                        ganacheDisBitch ? `ganacheImage` : ``
                      }`}
                    >
                      How the position property works.
                      <span className="tooltiptext">
                        The position property specifies the type of positioning
                        method used for an element.
                      </span>
                    </li>

                    <li
                      className={`tooltip text-white b1 border-b-white w-full py-2 px-1 ${
                        ganacheDisBitch ? `ganacheImage` : ``
                      }`}
                    >
                      Animations and transitions AKA ganache.
                      <span className="tooltiptext">
                        This is what seperates kings from layman. Anyone can
                        make a website, but can anyone GANACHE?!
                      </span>
                    </li>

                    <li
                      className={`text-white b1 border-b-white w-full py-2 px-1 ${
                        ganacheDisBitch ? `ganacheImage` : ``
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setGanache(!ganacheDisBitch)}
                      >
                        <b className="hoverUnderline">Click here </b>for some
                        ganache
                      </button>
                    </li>
                  </ul>
                </div>
              </Fade>
            </article>

            <article className="w-screen h-2screen flex sm:flex-col justify-evenly">
              <div className="w-1/2 h-screen sm:w-full flex flex-col items-center justify-center border-r-white sm:border-black sticky inset-y-0">
                <Fade>
                  <h1 className="text-white f4 uppercase sm:pb-2 w-2/3 text-center">
                    Week 3 I learnt:
                  </h1>

                  <ul className="w-2/3 p-5 sm:w-full sm:px-4">
                    <li className="tooltip text-white b1 border-b-white w-full py-2 px-1">
                      How to add optimised images in gatsby.
                      <span className="tooltiptext">
                        This requires a gatbsy class. By using gastby image,
                        websites can load up a lot faster.
                      </span>
                    </li>

                    <li className="tooltip text-white b1 border-b-white w-full py-2 px-1">
                      Object destructuring.
                      <span className="tooltiptext">
                        Desctruct objects and unpack the values to bind to a
                        variable.
                      </span>
                    </li>

                    <li className="tooltip text-white b1 border-b-white w-full py-2 px-1">
                      The origins of ganache (finesse -> panache -> ganache)
                      <span className="tooltiptext">
                        Dog loves ganache but it hurts his tummy
                      </span>
                    </li>
                  </ul>
                </Fade>
              </div>

              <Fade>
                <div className="w-1/2 sm:w-full flex flex-col">
                  <div className="h-screen justify-evenly items-center flex-col flex">
                    <figure className="w-2/3 p-10 sm:p-2 sm:-mt-5 flex flex-col justify-evenly">
                      <Img
                        fluid={
                          optimedEmilio
                            ? frontmatter.emilio.childImageSharp.fluid
                            : frontmatter.pixelatedEmilio.childImageSharp.fluid
                        }
                        alt="test"
                      ></Img>
                    </figure>
                    <h1 className="text-white w-2/3">
                      <button
                        type="button"
                        onClick={() => setoptimedEmilio(!optimedEmilio)}
                      >
                        {optimedEmilio
                          ? `Click to un-optimise*`
                          : `Click to optimise*`}
                        <br />
                        <br />
                        *this is not what gatsby optimisation does. Good enough
                        representation for design nerds though.
                      </button>
                    </h1>
                  </div>

                  <div className="h-screen justify-center items-center flex-col flex">
                    <figure className="w-2/3 p-10 sm:p-2 sm:-mt-5">
                      <Img
                        fluid={
                          optimedEmilio
                            ? frontmatter.borked.childImageSharp.fluid
                            : frontmatter.leborked.childImageSharp.fluid
                        }
                        alt="test"
                      ></Img>
                    </figure>
                    <h1 className="text-white w-full text-center">
                      <button
                        type="button"
                        onClick={() => setoptimedEmilio(!optimedEmilio)}
                      >
                        {optimedEmilio
                          ? `Click to un-optimise*`
                          : `Click to optimise*`}
                      </button>
                    </h1>
                  </div>
                </div>
              </Fade>
            </article>

            <article className="w-screen h-screen flex sm:flex-col-reverse justify-evenly">
              <div className="w-1/2 sm:w-full flex justify-center items-center border-r-white sm:border-black">
                <Fade>
                  <div className="w-full justify-center flex flex-col items-center">
                    <figure className="w-full px-32 py-10 sm:p-2 sm:-mt-5">
                      <Img
                        fluid={
                          hookExample
                            ? frontmatter.noBorked.childImageSharp.fluid
                            : frontmatter.yesBorked.childImageSharp.fluid
                        }
                        alt="test"
                      ></Img>
                    </figure>

                    <p className="text-white w-full text text-center">
                      {hookExample
                        ? `Hooks are friggen crazy.`
                        : `
                        😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐⁣⁣⁣⁣😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐😐
                        `}
                      <br />
                      <br />
                      {hookExample
                        ? `For example, right now this text is in english`
                        : `Now its in emoji`}
                    </p>

                    <button
                      className="text-white border-white w-auto p-2 rounded-lg mt-8"
                      type="button"
                      onClick={() => setHooksExample(!hookExample)}
                    >
                      Click for hook example
                    </button>
                  </div>
                </Fade>
              </div>

              <Fade>
                <div className="w-1/2 sm:w-full flex flex-col items-center justify-center">
                  <h1 className="text-white f4 uppercase sm:pb-2 w-2/3 text-center">
                    Week 4 I learnt:
                  </h1>

                  <ul className="w-2/3 p-5 sm:w-full sm:px-4">
                    <li className="tooltip text-white b1 border-b-white w-full py-2 px-1">
                      Hooks to change the style of an element after a click
                      event.
                      <span className="tooltiptext">
                        Hooks store values in variables and upon interactions
                        the value of the variable can change.
                      </span>
                    </li>

                    <li className="tooltip text-white b1 border-b-white w-full py-2 px-1">
                      Always make sure the data structure is clean first, then
                      work out the other shit later.
                      <span className="tooltiptext">
                        Data structure must be clean. Clients CMS should be nice
                        and simple.
                      </span>
                    </li>

                    <li className="tooltip text-white b1 border-b-white w-full py-2 px-1">
                      It's important to manage your time and keep the dispatches
                      coming.
                      <span className="tooltiptext">
                        Sometimes clients or designers take ages to make
                        decisions. Make sure everyone stays organised and
                        dispatches keep coming... or else...
                      </span>
                    </li>
                  </ul>
                </div>
              </Fade>
            </article>

            <article className="w-screen h-screen flex sm:flex-col justify-evenly">
              <div className="w-1/2 h-screen sm:w-full flex flex-col items-center justify-center border-r-white sm:border-black sticky inset-y-0">
                <Fade>
                  <h1 className="text-white f4 uppercase sm:pb-2 w-2/3 text-center">
                    Week 5 I learnt:
                  </h1>

                  <ul className="w-2/3 p-5 sm:w-full sm:px-4">
                    <li className="tooltip text-white b1 border-b-white w-full py-2 px-1">
                      Be careful when I have soy milk around my laptop
                      <span className="tooltiptext">🥛🙅‍♂️💻</span>
                    </li>

                    <li className="tooltip text-white b1 border-b-white w-full py-2 px-1">
                      YAML
                      <span className="tooltiptext">
                        ughh yaml is a human readable data-serialization
                        language. It is heavily dependant on indentation and
                        syntax. 1 wrong move and the app shits itself.
                      </span>
                    </li>

                    <li className="tooltip text-white b1 border-b-white w-full py-2 px-1">
                      The map function
                      <span className="tooltiptext">
                        You feed the map function a list of variables and it
                        recreates the variables with certain styles and
                        properties.
                      </span>
                    </li>

                    <li className="tooltip text-white b1 border-b-white w-full py-2 px-1">
                      You can learn everything from Google
                      <span className="tooltiptext">
                        The life of a developer is having no clue how to do
                        anything... then going on google and working it out.
                      </span>
                    </li>
                  </ul>
                </Fade>
              </div>

              <Fade>
                <div className="w-1/2 sm:w-full flex flex-col">
                  <div className="h-screen justify-evenly items-center flex-col flex">
                    <figure className="w-full p-32 sm:p-2 sm:-mt-5 flex flex-col justify-evenly">
                      <img src="uploads/milkman.gif" alt="milkman"></img>
                    </figure>
                  </div>
                </div>
              </Fade>
            </article>
          </div>
        </section>

        <article className="w-screen h-screen flex sm:flex-col-reverse justify-evenly">
          <div className="w-1/2 sm:w-full flex justify-center items-center border-r-white sm:border-black">
            <Fade>
              <div className="w-full h-full m-16 p-12 justify-center flex flex-col items-center">
                <Img
                  fluid={frontmatter.starryNight.childImageSharp.fluid}
                  className="absolute w-full h-full"
                ></Img>
                <div
                  className="w-56 h-48 absolute"
                  style={{
                    transform: `translate(${cursorCenterDeltaX *
                      220}%,${cursorCenterDeltaY * 250}%)`
                  }}
                >
                  <Img
                    fluid={frontmatter.ufo.childImageSharp.fluid}
                    alt="ship"
                    className="absolute w-full h-full transform-center"
                  />
                </div>
              </div>
            </Fade>
          </div>

          <Fade>
            <div className="w-1/2 sm:w-full flex flex-col items-center justify-center">
              <h1 className="text-white f4 uppercase sm:pb-2 w-2/3 text-center">
                Week 6 I learnt:
              </h1>

              <ul className="w-2/3 p-5 sm:w-full sm:px-4">
                <li className="tooltip text-white b1 border-b-white w-full py-2 px-1">
                  Set Interval
                  <span className="tooltiptext">
                    setInterval calls a method or function at specified
                    intervals
                  </span>
                </li>

                <li className="tooltip text-white b1 border-b-white w-full py-2 px-1">
                  useEffect
                  <span className="tooltiptext">
                    useEffect executes code everytime a component renders
                  </span>
                </li>

                <li className="tooltip text-white b1 border-b-white w-full py-2 px-1">
                  Cursor Context
                  <span className="tooltiptext">
                    CursorContext returns the position of the cursor on the
                    screen.
                  </span>
                </li>

                <li className="tooltip text-white b1 border-b-white w-full py-2 px-1">
                  Cursor Context
                  <span className="tooltiptext">
                    CursorContext returns the position of the cursor on the
                    screen.
                  </span>
                </li>
              </ul>
            </div>
          </Fade>
        </article>

        <Fade left>
          <figure className="w-full h-90vh pt-10 mt-16 pb-8 px-8 z-0 flex justify-center items-center">
            <h1 className="f2 text-white">
              Massive thanks to Charl, Dog and the entire team at LAM for
              teaching me all these things that I've learnt.
              <br />
              <br />
              It's been an awesome experience working alongside the team at ❤️ +
              💸 and I wish you guys all the best for the future.
              <br />
              <br />
              TY ✌️
            </h1>
          </figure>
        </Fade>

        <div className="h-24"></div>
      </Layout>

      <Footer />
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        seoDescription
        seoKeywords
        everyone {
          childImageSharp {
            fluid(maxWidth: 512) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        ufo {
          childImageSharp {
            fluid(maxWidth: 512) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        starryNight {
          childImageSharp {
            fluid(maxWidth: 512) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        noBorked {
          childImageSharp {
            fluid(maxWidth: 512) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        yesBorked {
          childImageSharp {
            fluid(maxWidth: 512) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        borked {
          childImageSharp {
            fluid(maxWidth: 512) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        leborked {
          childImageSharp {
            fluid(maxWidth: 512) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        laborked {
          childImageSharp {
            fluid(maxWidth: 512) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        pixelatedEmilio {
          childImageSharp {
            fluid(maxWidth: 512) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        emilio {
          childImageSharp {
            fluid(maxWidth: 512) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`;
