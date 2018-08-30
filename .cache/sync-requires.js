// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/michaelcastor/projects/dreaming-of-thailand-contentful-cms/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-posts-post-page-js": preferDefault(require("/Users/michaelcastor/projects/dreaming-of-thailand-contentful-cms/src/posts/PostPage.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/michaelcastor/projects/dreaming-of-thailand-contentful-cms/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/michaelcastor/projects/dreaming-of-thailand-contentful-cms/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/michaelcastor/projects/dreaming-of-thailand-contentful-cms/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/michaelcastor/projects/dreaming-of-thailand-contentful-cms/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/michaelcastor/projects/dreaming-of-thailand-contentful-cms/.cache/json/layout-index.json"),
  "video-test.json": require("/Users/michaelcastor/projects/dreaming-of-thailand-contentful-cms/.cache/json/video-test.json"),
  "white-temple.json": require("/Users/michaelcastor/projects/dreaming-of-thailand-contentful-cms/.cache/json/white-temple.json"),
  "second-try.json": require("/Users/michaelcastor/projects/dreaming-of-thailand-contentful-cms/.cache/json/second-try.json"),
  "this-should-trigger-contentful.json": require("/Users/michaelcastor/projects/dreaming-of-thailand-contentful-cms/.cache/json/this-should-trigger-contentful.json"),
  "our-first-contentful-post.json": require("/Users/michaelcastor/projects/dreaming-of-thailand-contentful-cms/.cache/json/our-first-contentful-post.json"),
  "cher-bear.json": require("/Users/michaelcastor/projects/dreaming-of-thailand-contentful-cms/.cache/json/cher-bear.json"),
  "dev-404-page.json": require("/Users/michaelcastor/projects/dreaming-of-thailand-contentful-cms/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/michaelcastor/projects/dreaming-of-thailand-contentful-cms/.cache/json/404.json"),
  "about.json": require("/Users/michaelcastor/projects/dreaming-of-thailand-contentful-cms/.cache/json/about.json"),
  "index.json": require("/Users/michaelcastor/projects/dreaming-of-thailand-contentful-cms/.cache/json/index.json"),
  "404-html.json": require("/Users/michaelcastor/projects/dreaming-of-thailand-contentful-cms/.cache/json/404-html.json")
}