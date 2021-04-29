import React, {useEffect, useState} from 'react';
import animations from '../../tailwind/vivify-names';
import animations2 from '../../tailwind/hover-names';

/**
 * @desc tailwind stylesheet
 * @returns react component
 */
function Stylesheet() {
  useEffect(() => {
    if (process.browser)
      document.querySelector('footer').innerHTML += `<style>#__next {
  display: inherit !important;
}</style>`;
    return () => {};
  }, []);

  const [magic, setMagic] = useState('pulsate');
  const [vivify, setVivify] = useState('puffin');
  return (
    <>
      {/**
       * NAV
       * */}
      <section className="fixed top-0 left-0 justify-center w-full uppercase spaced p-2xl bg-gray-darkest">
        <a className="text-white " href="#colors">
          colors
        </a>
        <a className="text-white" href="#text">
          text
        </a>
        <a className="text-white" href="#padding">
          padding
        </a>
        <a className="text-white" href="#margin">
          margin
        </a>
        <a className="text-white" href="#elements">
          elements
        </a>
        <a className="text-white" href="#shadows">
          shadows
        </a>
        <a className="text-white" href="#colors">
          colors
        </a>
        <a className="text-white" href="#containers">
          Container
        </a>
        <a className="text-white" href="#animations">
          Animations
        </a>
      </section>

      {/**
       * COLORS
       * */}
      <section
        id="colors"
        className="items-center grid-cols-4 md:grid lg:grid xl:grid bg-gray-lightest gap-lg p-4xl sm:grid-flow-col-dense"
      >
        <h1 className="col-span-4 text-center uppercase p-md mt-6xl">Colors</h1>
        <div className="flex border-2 shadow-xl bg-gray-light p-lg m-xs">
          <div className="flex-auto bg-primary-lightest"></div>
          <div className="flex-auto bg-primary-light"></div>
          <div className="flex-auto bg-primary">
            <h3 className="text-center text-white uppercase p-md">Primary</h3>
          </div>
          <div className="flex-auto bg-primary-dark"></div>
          <div className="flex-auto bg-primary-darkest"></div>
        </div>
        <div className="flex border-2 shadow-xl bg-gray-light p-lg m-xs">
          <div className="flex-auto bg-secondary-lightest"></div>
          <div className="flex-auto bg-secondary-light"></div>
          <div className="flex-auto bg-secondary">
            <h3 className="text-center text-white uppercase p-md">Secondary</h3>
          </div>
          <div className="flex-auto bg-secondary-dark"></div>
          <div className="flex-auto bg-secondary-darkest"></div>
        </div>
        <div className="flex border-2 shadow-xl bg-gray-light p-lg m-xs">
          <div className="flex-auto bg-gray-lightest"></div>
          <div className="flex-auto bg-gray-light"></div>
          <div className="flex-auto bg-gray">
            <h3 className="text-center text-white uppercase p-md">Gray</h3>
          </div>
          <div className="flex-auto bg-gray-dark"></div>
          <div className="flex-auto bg-gray-darkest"></div>
        </div>
        <div className="flex border-2 shadow-xl bg-gray-light p-lg m-xs">
          <div className="flex-auto bg-green-lightest"></div>
          <div className="flex-auto bg-green-light"></div>
          <div className="flex-auto bg-green">
            <h3 className="text-center text-white uppercase p-md">Green</h3>
          </div>
          <div className="flex-auto bg-green-dark"></div>
          <div className="flex-auto bg-green-darkest"></div>
        </div>
        <div className="flex border-2 shadow-xl bg-gray-light p-lg m-xs">
          <div className="flex-auto bg-red-lightest"></div>
          <div className="flex-auto bg-red-light"></div>
          <div className="flex-auto bg-red">
            <h3 className="text-center text-white uppercase p-md">Red</h3>
          </div>
          <div className="flex-auto bg-red-dark"></div>
          <div className="flex-auto bg-red-darkest"></div>
        </div>
        <div className="flex border-2 shadow-xl bg-gray-light p-lg m-xs">
          <div className="flex-auto bg-blue-lightest"></div>
          <div className="flex-auto bg-blue-light"></div>
          <div className="flex-auto bg-blue">
            <h3 className="text-center text-white uppercase p-md">blue</h3>
          </div>
          <div className="flex-auto bg-blue-dark"></div>
          <div className="flex-auto bg-blue-darkest"></div>
        </div>
        <div className="flex border-2 shadow-xl bg-gray-light p-lg m-xs">
          <div className="flex-auto bg-yellow-lightest"></div>
          <div className="flex-auto bg-yellow-light"></div>
          <div className="flex-auto bg-yellow">
            <h3 className="text-center text-white uppercase p-md">yellow</h3>
          </div>
          <div className="flex-auto bg-yellow-dark"></div>
          <div className="flex-auto bg-yellow-darkest"></div>
        </div>
      </section>

      {/**
       * SHADOWS
       * */}
      <section
        id="text"
        className="flex flex-wrap items-center justify-center bg-secondary-light p-4xl"
      >
        <h1 className="flex-none col-span-4 text-center uppercase p-md mt-6xl w-100">
          Text
        </h1>
        <article className="prose prose-lg p-lg">
          <h1>Garlic bread with cheese: What the science tells us</h1>
          <p>
            For years parents have espoused the health benefits of eating garlic
            bread with cheese to their children, with the food earning such an
            iconic status in our culture that kids will often dress up as warm,
            cheesy loaf htmlFor Halloween.
          </p>
          <p>
            But a recent study shows that the celebrated appetizer may be linked
            to a series of rabies cases springing up around the country.
          </p>
          <h2>Garlic bread with cheese: What the science tells us</h2>
          <p>
            For years parents have espoused the health benefits of eating garlic
            bread with cheese to their children, with the food earning such an
            iconic status in our culture that kids will often dress up as warm,
            cheesy loaf htmlFor Halloween.
          </p>
        </article>
        <article className="prose prose-lg p-lg">
          <h3>Garlic bread with cheese: What the science tells us</h3>
          <p>
            But a recent study shows that the celebrated appetizer may be linked
            to a series of rabies cases springing up around the country.
          </p>
          <h4>Garlic bread with cheese: What the science tells us</h4>
          <p>
            But a recent study shows that the celebrated appetizer may be linked
            to a series of rabies cases springing up around the country.
          </p>
          <h5>Garlic bread with cheese: What the science tells us</h5>
          <p>
            But a recent study shows that the celebrated appetizer may be linked
            to a series of rabies cases springing up around the country.
          </p>
        </article>
      </section>

      {/**
       * PADDING
       * */}
      <section
        id="padding"
        className="flex flex-wrap items-center justify-center bg-primary-light p-4xl"
      >
        <h1 className="text-center uppercase p-md mt-6xl min-w-100">Padding</h1>
        <div className="self-center border-2 shadow-xl bg-primary p-xs m-xs">
          <div className="min-h-100 bg-gray-lightest">
            <h3 className="text-center p-md">p-xs</h3>
          </div>
        </div>
        <div className="self-center border-2 shadow-xl bg-primary p-sm m-xs">
          <div className="min-h-100 bg-gray-lightest">
            <h3 className="text-center p-md">p-sm</h3>
          </div>
        </div>
        <div className="self-center border-2 shadow-xl bg-primary p-md m-xs">
          <div className="min-h-100 bg-gray-lightest">
            <h3 className="text-center p-md">p-md</h3>
          </div>
        </div>
        <div className="border-2 shadow-xl bg-primary p-lg m-xs">
          <div className="min-h-100 bg-gray-lightest">
            <h3 className="text-center p-md">p-lg</h3>
          </div>
        </div>
        <div className="border-2 shadow-xl bg-primary p-xl m-xs">
          <div className="min-h-100 bg-gray-lightest">
            <h3 className="text-center p-md">p-xl</h3>
          </div>
        </div>
        <div className="border-2 shadow-xl bg-primary p-2xl m-xs">
          <div className="min-h-100 bg-gray-lightest">
            <h3 className="text-center p-md">p-2xl</h3>
          </div>
        </div>
        <div className="self-center border-2 shadow-xl bg-primary p-3xl m-xs">
          <div className="min-h-100 bg-gray-lightest">
            <h3 className="text-center p-md">p-3xl</h3>
          </div>
        </div>
        <div className="self-center border-2 shadow-xl bg-primary p-4xl m-xs">
          <div className="min-h-100 bg-gray-lightest">
            <h3 className="text-center p-md">p-4xl</h3>
          </div>
        </div>
        <div className="self-center border-2 shadow-xl bg-primary p-5xl m-xs">
          <div className="min-h-100 bg-gray-lightest">
            <h3 className="text-center p-md">p-5xl</h3>
          </div>
        </div>
        <div className="self-center border-2 shadow-xl bg-primary p-6xl m-xs">
          <div className="min-h-100 bg-gray-lightest">
            <h3 className="text-center p-md">p-6xl</h3>
          </div>
        </div>
        <div className="self-center border-2 shadow-xl bg-primary p-7xl m-xs">
          <div className="min-h-100 bg-gray-lightest">
            <h3 className="text-center p-md">p-7xl</h3>
          </div>
        </div>
      </section>

      {/**
       * MARGIN
       * */}
      <section
        id="margin"
        className="flex flex-wrap items-center justify-center bg-secondary-light p-4xl"
      >
        <h1 className="text-center uppercase p-md mt-6xl min-w-100">Margin</h1>
        <div className="border-2 shadow-xl bg-secondary m-xs">
          <div className="m-xs bg-gray-lightest">
            <h3 className="text-center p-md">m-xs</h3>
          </div>
        </div>
        <div className="border-2 shadow-xl bg-secondary m-xs">
          <div className="m-sm bg-gray-lightest">
            <h3 className="text-center p-md">m-sm</h3>
          </div>
        </div>
        <div className="border-2 shadow-xl bg-secondary m-xs">
          <div className="m-md bg-gray-lightest">
            <h3 className="text-center p-md">m-md</h3>
          </div>
        </div>
        <div className="border-2 shadow-xl bg-secondary m-xs">
          <div className="m-lg bg-gray-lightest">
            <h3 className="text-center p-md">m-lg</h3>
          </div>
        </div>
        <div className="border-2 shadow-xl bg-secondary m-xs">
          <div className="m-xl min-h-100 bg-gray-lightest">
            <h3 className="text-center p-md">m-xl</h3>
          </div>
        </div>
        <div className="border-2 shadow-xl bg-secondary m-xs">
          <div className="m-2xl bg-gray-lightest">
            <h3 className="text-center p-md">m-2xl</h3>
          </div>
        </div>
        <div className="border-2 shadow-xl bg-secondary m-xs">
          <div className="m-3xl bg-gray-lightest">
            <h3 className="text-center p-md">m-3xl</h3>
          </div>
        </div>
        <div className="border-2 shadow-xl bg-secondary m-xs">
          <div className="m-4xl bg-gray-lightest">
            <h3 className="text-center p-md">m-4xl</h3>
          </div>
        </div>
        <div className="border-2 shadow-xl bg-secondary m-xs">
          <div className="m-5xl bg-gray-lightest">
            <h3 className="text-center p-md">m-5xl</h3>
          </div>
        </div>
        <div className="border-2 shadow-xl bg-secondary m-xs">
          <div className="m-6xl bg-gray-lightest">
            <h3 className="text-center p-md">m-6xl</h3>
          </div>
        </div>
        <div className="border-2 shadow-xl bg-secondary m-xs">
          <div className="m-7xl bg-gray-lightest">
            <h3 className="text-center p-md">m-7xl</h3>
          </div>
        </div>
      </section>

      {/**
       * ELEMENTS
       * */}
      <section
        id="elements"
        className="items-center grid-cols-2 bg-primary-light md:grid lg:grid xl:grid gap-lg p-4xl"
      >
        <h1 className="col-span-2 text-center uppercase p-md mt-6xl min-w-100">
          Elements
        </h1>
        <section className="grid items-center grid-cols-2 gap-lg p-4xl">
          <h2 className="text-center uppercase p-md">Form</h2>
          <div></div>
          <form>
            <fieldset className="labeled">
              <label htmlFor="intext">Text:</label>
              <input id="intext" type="text" value="Text" />
            </fieldset>
            <fieldset className="labeled">
              <label htmlFor="innr">Nr:</label>
              <input id="innr" type="number" placeholder="123" />
            </fieldset>
            <fieldset className="labeled">
              <label htmlFor="inemail">Email:</label>
              <input id="inemail" type="email" placeholder="example@test.com" />
            </fieldset>
            <fieldset className="labeled">
              <label htmlFor="inpw">Password:</label>
              <input id="inpw" type="password" value="1234" />
            </fieldset>
            <fieldset>
              <label htmlFor="jetzt">Val1</label>
              <input name="radiogrp" type="radio" id="jetzt" value="current" />
              <label htmlFor="heute">Val2</label>
              <input name="radiogrp" type="radio" id="heute" value="tomorrow" />
              <label htmlFor="fiveday">Val3</label>
              <input
                name="radiogrp"
                type="radio"
                id="fiveday"
                value="fiveday"
              />
            </fieldset>
          </form>
        </section>
        <section>
          <h2 className="text-center uppercase p-md">Spaced</h2>
          <div className="spaced min-h-75 m-sm">
            <div className="text-white bg-secondary-dark w-50">
              <p className="text-center p-xl">spaced</p>
            </div>
            <div className="text-white bg-secondary-darkest w-50">
              <p className="text-center p-xl">spaced</p>
            </div>
          </div>
          <div className="spaced-lg min-h-75 m-sm">
            <div className="text-white bg-secondary-dark w-50">
              <p className="text-center p-xl">spaced-lg</p>
            </div>
            <div className="text-white bg-secondary-darkest w-50">
              <p className="text-center p-xl">spaced-lg</p>
            </div>
          </div>
        </section>
        <section className="modal demo">
          <h2 className="text-center uppercase p-md">Modal</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            atque saepe repudiandae magnam sequi laboriosam sint explicabo
            voluptas autem ipsa!
          </p>
        </section>
        <section className="p-4xl">
          <h2 className="text-center uppercase p-md">Buttons</h2>
          <div className="items-center justify-center spaced">
            <button className="btn-primray">Button</button>
            <button className="btn-secondary">Button</button>
            <button className="btn-success">Button</button>
          </div>
        </section>
      </section>

      {/**
       * SHADOWS
       * */}
      <section
        id="shadow"
        className="flex flex-wrap items-center justify-center bg-secondary-light min-h-75 p-4xl"
      >
        <h1 className="text-center uppercase p-md mt-6xl min-w-100">Shadows</h1>
        <div className="border-2 shadow-sm bg-secondary m-xs">
          <div className="m-6xl bg-gray-lightest">
            <h3 className="text-center p-md">shadow-sm</h3>
          </div>
        </div>
        <div className="border-2 shadow bg-secondary m-xs">
          <div className="m-6xl bg-gray-lightest">
            <h3 className="text-center p-md">shadow</h3>
          </div>
        </div>
        <div className="border-2 shadow-md bg-secondary m-xs">
          <div className="m-6xl bg-gray-lightest">
            <h3 className="text-center p-md">shadow-md</h3>
          </div>
        </div>
        <div className="border-2 shadow-lg bg-secondary m-xs">
          <div className="m-6xl bg-gray-lightest">
            <h3 className="text-center p-md">shadow-lg</h3>
          </div>
        </div>
        <div className="border-2 shadow-xl bg-secondary m-xs">
          <div className="m-6xl min-h-100 bg-gray-lightest">
            <h3 className="text-center p-md">shadow-xl</h3>
          </div>
        </div>
        <div className="border-2 shadow-inner bg-secondary m-xs">
          <div className="m-6xl bg-gray-lightest">
            <h3 className="text-center p-md">shadow-inner</h3>
          </div>
        </div>
        <div className="border-2 shadow-none bg-secondary m-xs">
          <div className="m-6xl bg-gray-lightest">
            <h3 className="text-center p-md">shadow-none</h3>
          </div>
        </div>
      </section>

      {/**
       * CONTAINERS
       * */}
      <section
        id="containers"
        className="items-center bg-gray-lightest min-h-75"
      >
        <h1 className="text-center uppercase p-md mt-6xl min-w-100">
          Container
        </h1>
        <div className="container-normal px-xs mt-lg mb-lb">
          <div className="flex items-center justify-center bg-primary min-h-50">
            <article className="prose prose-lg p-lg">
              <h1>Normal px-xs</h1>
              <p>
                For years parents have espoused the health benefits of eating
                garlic bread with cheese to their children, with the food
                earning such an iconic status in our culture that kids will
                often dress up as warm, cheesy loaf htmlFor Halloween.
              </p>
            </article>
          </div>
        </div>
        <div className="container-normal px-4xl mt-lg mb-lb">
          <div className="flex items-center justify-center bg-primary min-h-50">
            <article className="prose prose-lg p-lg">
              <h1>Normal px-4xl</h1>
              <p>
                For years parents have espoused the health benefits of eating
                garlic bread with cheese to their children, with the food
                earning such an iconic status in our culture that kids will
                often dress up as warm, cheesy loaf htmlFor Halloween.
              </p>
            </article>
          </div>
        </div>
        <div className="container-full mt-lg mb-lb">
          <div className="flex items-center justify-center bg-primary min-h-50">
            <article className="prose prose-lg p-lg">
              <h1>Full/Fluid</h1>
              <p>
                For years parents have espoused the health benefits of eating
                garlic bread with cheese to their children, with the food
                earning such an iconic status in our culture that kids will
                often dress up as warm, cheesy loaf htmlFor Halloween.
              </p>
              <p>
                But a recent study shows that the celebrated appetizer may be
                linked to a series of rabies cases springing up around the
                country.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/**
       * ANIMATIONS
       * */}
      <section
        id="animations"
        className="items-center bg-primary-lightest gap-lg p-4xl"
      >
        <h1 className="col-span-4 text-center uppercase p-md mt-6xl">
          Animations vivify css
        </h1>
        <div className="flex flex-row flex-wrap border-2 shadow-xl bg-primary-light">
          <div
            style={{height: '150px', width: '150px', flex: '1 1 150px'}}
            className={`border-2 border-primary flex-1 m-xs`}
          >
            <div
              style={{width: '100%', height: '100%'}}
              className={`animate-${vivify} bg-primary text-white text-center flex-1 p-lg`}
            >
              {vivify}
            </div>
          </div>
          {Object.keys(animations).map(animation => (
            <div key={animation} className={`flex-1 m-xs p-lg`}>
              <button
                onClick={e => setVivify(animation)}
                className="text-center text-white bg-primary"
              >
                {animation}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/**
       * ANIMATIONS
       * */}
      <section className="items-center bg-gray-lightest gap-lg p-4xl">
        <h1 className="col-span-4 text-center uppercase p-md mt-6xl">
          Animations Magic CSS
        </h1>
        <div className="flex flex-row flex-wrap border-2 shadow-xl bg-primary-light p-lg m-xs">
          <div
            style={{height: '150px', width: '150px', flex: '1 1 150px'}}
            className={`border-2 border-primary flex-1 m-xs`}
          >
            <div
              style={{width: '100%', height: '100%'}}
              className={`animate-${magic} bg-primary text-white text-center flex-1 p-lg`}
            >
              {magic}
            </div>
          </div>
          {Object.keys(animations2).map(animation => (
            <div key={animation} className={`flex-1 m-xs p-lg`}>
              <button
                onClick={e => setMagic(animation)}
                className="text-center text-white bg-primary"
              >
                {animation}
              </button>
            </div>
          ))}
        </div>
      </section>

      <footer></footer>
    </>
  );
}

export default Stylesheet;
