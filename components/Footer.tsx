/** @jsx h */
import { h } from "preact";
import { tw } from 'twind'

export default function Footer() {
  return (
    <footer
      class={tw`bottom-0 w-full h-14 lg:px-36 md:px-20 sm:px-16 px-10 bg-gray-900 absolute flex items-center justify-center text-white font-base sm:text-base text-sm`}
    >
      <a href="https://www.timsusa.net" >Tim Susa</a>
    </footer>
  );
}
