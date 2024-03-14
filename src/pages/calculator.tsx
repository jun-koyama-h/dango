import { promises } from 'fs';
import { GetStaticProps, NextPage } from 'next';
import { join } from 'path';
import React, { ReactElement, useEffect, useState } from 'react';
import { Button } from '../components/Button';
import { Country, RandomCat } from '../lib/Types.js';

type Props = Readonly<{
  countries: Array<Country>;
}>;


const IndexPage: NextPage<Props> = ({ }: Props): ReactElement => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search').then(async (res: Response) => {

    });
  }, []);

  return (
    <>
      <div className="m-10 p-4 w-2/3 mx-auto shadow-lg border-2 rounded-2xl">
        <div className="mx-auto">
          <div className="p-3 mb-3 border-2 rounded h-full w-full text-right">
            <span className="text-gray-700 select-none">{count}</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(count);

                setCount(count + 1);
              }}
            >
              <span className="select-none text-xl">7</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(count);

                setCount(count + 1);
              }}
            >
              <span className="select-none text-xl">8</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(count);

                setCount(count + 1);
              }}
            >
              <span className="select-none text-xl">9</span>
            </Button>
            <Button
              className="py-2 bg-pink-300 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(count);

                setCount(count + 1);
              }}
            >
              <span className="select-none text-xl">/</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(count);

                setCount(count + 1);
              }}
            >
              <span className="select-none text-xl">4</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(count);

                setCount(count + 1);
              }}
            >
              <span className="select-none text-xl">5</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(count);

                setCount(count + 1);
              }}
            >
              <span className="select-none text-xl">6</span>
            </Button>
            <Button
              className="py-2 bg-pink-300 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(count);

                setCount(count + 1);
              }}
            >
              <span className="select-none text-xl">*</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(count);

                setCount(count + 1);
              }}
            >
              <span className="select-none text-xl">1</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(count);

                setCount(count + 1);
              }}
            >
              <span className="select-none text-xl">2</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(count);

                setCount(count + 1);
              }}
            >
              <span className="select-none text-xl">3</span>
            </Button>
            <Button
              className="py-2 bg-pink-300 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(count);

                setCount(count + 1);
              }}
            >
              <span className="select-none text-xl">-</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(count);

                setCount(count + 1);
              }}
            >
              <span className="select-none text-xl">.</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(count);

                setCount(count + 1);
              }}
            >
              <span className="select-none text-xl">0</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(count);

                setCount(count + 1);
              }}
            >
              <span className="select-none text-xl">=</span>
            </Button>
            <Button
              className="py-2 bg-pink-300 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(count);

                setCount(count + 1);
              }}
            >
              <span className="select-none text-xl">-</span>
            </Button>
            <Button
              className="py-2 bg-teal-400 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                setCount(0);
              }}
            >
              <span className="select-none text-xl">C</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const buffer = await promises.readFile(join(process.cwd(), 'json', 'countries.json'));
  const str  = buffer.toString();

  return {
    props: {
      countries: JSON.parse(str) as Array<Country>
    }
  };
};

// eslint-disable-next-line import/no-default-export
export default IndexPage;
