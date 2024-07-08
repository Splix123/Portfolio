import useMeasure from "react-use-measure";
import { useTrail, animated } from "@react-spring/web";
import styles from "./styles.module.css";

const fast = { tension: 1200, friction: 40 };
const slow = { mass: 7, tension: 200, friction: 50 };
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

const BlobCursor = () => {
  const [trail, api] = useTrail(3, (i) => ({
    xy: [0, 0],
    config: i === 0 ? fast : slow,
  }));
  const [ref, { left, top }] = useMeasure();

  const handleMouseMove = (e) => {
    api.start({ xy: [e.clientX - left, e.clientY - top] });
  };

  return (
    <>
      <svg className="absolute w-0 h-0">
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
          <feColorMatrix
            in="blur"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"
          />
        </filter>
      </svg>
      <div ref={ref} className={styles.hooksMain} onMouseMove={handleMouseMove}>
        {trail.map((props, index) => (
          <animated.div
            key={index}
            className="absolute top-0 left-0 will-change-transform bg-white/90 shadow-[10px_10px_5px_0px_rgba(0,0,0,0.75)] opacity-80 first:w-12 first:h-12 even:w-16 even:h-16 last:w-14 last:h-14 after:content-none after:absolute after:top-5 after:left-5 after:w-5 after:h-5 after:bg-white/90"
            style={{ transform: props.xy.to(trans) }}
          />
        ))}
      </div>
    </>
  );
};

export default BlobCursor;
