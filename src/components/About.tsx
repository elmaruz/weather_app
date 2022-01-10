import s from '../css_modules/About.module.css';

export default function About() {
  return (
    <div className={`${s.main}`}>
      <div className={`${s.box}`}>
        <h1>About</h1>
        <p className={`${s.par}`}>
          A cute little weather app built using TypeScript and React.
          <br />
          <br />
          Hello mate hello mate hello mate
        </p>
      </div>
    </div>
  );
}
