import styles from "./introduction.module.css";

export const Introduction = () => {
  return (
    <section className="mt-24 px-12">
      <div className="flex flex-col">
        <h2 className="font-semibold text-6xl text-primary w-fit tracking-wider">
          Afolabi Moyinoluwa.
        </h2>

        <h3 className="font-semibold text-6xl text-primaryAlpha mt-2 w-fit tracking-wider">
          Creative Software Engineer.
        </h3>
        <div className="w-fit">
          <p className="mt-5 text-primaryAlpha max-w-[540px] text-xl tracking-wider">
            I'm a software Engineer, recognized for a strong eye for design and
            a commitment to delivering high-quality, user-friendly web
            applications.
          </p>
        </div>
        <div className={`${styles.aboutMe} py-3 px-5`}>
          <span></span>
          <p className="text-sm text-primary">About Me</p>
        </div>
      </div>
    </section>
  );
};
