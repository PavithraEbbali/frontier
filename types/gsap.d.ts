// The `gsap/dist/*` runtime paths ship no type declarations. Re-export the
// package's real ScrollTrigger types so the dist import stays fully typed.
declare module "gsap/dist/ScrollTrigger" {
  export * from "gsap/ScrollTrigger";
}
