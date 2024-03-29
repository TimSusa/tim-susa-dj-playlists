/** @jsx h */
import { h } from "preact";
import { tw } from "twind";
import { PostsType } from "../utils/locate.ts";

interface ContentProps {
  posts: PostsType;
}

export default function Content(props: ContentProps) {
  return (
    <section class={tw`lg:px-36 lg:py-32 sm:px-20 px-10 py-28 space-y-4`}>
      <p class={tw`opacity-50 font-semibold`}>
        Total of {Object.values(props.posts).map((p) => p.length).reduce(
          (a: number, b: number) => a + b,
          0,
        )} posts
      </p>
      <div
        class={tw`flex flex-wrap items-center lg:justify-start justify-center gap-5`}
      >
        {Object.entries(props.posts).map(([key, value]) =>
          value.map((post) => {
            return (
              <a
                href={`/${key}/${post?.url}`}
                class={tw`bg-white lg:w-80 w-full h-96 rounded shadow-md overflow-hidden cursor-pointer relative sm:flex lg:block `}
              >
                <div
                  class={tw`flex items-center justify-center py-4`}
                 >
                  {/* <img
                    class={tw`lg:h-1/2 sm:h-1/2 h-1/2 lg:w-1/2 sm:w-1/2 w-1/2 bg-cover bg-center`}
                    class={tw`lg:h-1/2 sm:h-1/2 h-1/2 lg:w-1/2 sm:w-1/2 w-1/2 bg-cover bg-center`}s
                    src={`/thumbnails/${post?.url}.jpg`}
                    alt={post?.title}
                  /> */}
                </div>
                <div class={tw`my-4 mx-3 space-y-4`}>
                  <span
                    class={tw`border border-red-500 rounded-sm text-red-500 px-2 py-1 opacity-60 capitalize`}
                  >
                    {key}
                  </span>
                  <h3 class={tw`lg:text-lg sm:text-3xl text-xl capitalize`}>
                    {post?.title}
                  </h3>
                  <p
                    class={tw`absolute bottom-1 lg:left-0 sm:right-0 mx-2 text-xs text-black opacity-40`}
                  >
                    By&nbsp;
                    <span class={tw`font-semibold`}>Tim Susa</span>
                    <span class={tw`mx-2`}>•</span>
                    {typeof (post?.date) === "string"
                      ? new Date(post.date).toDateString()
                      : post?.date?.toDateString()}
                  </p>
                </div>
              </a>
            );
          })
        )}
      </div>
    </section>
  );
}
