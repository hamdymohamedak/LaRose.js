import { CounterUp } from '../../AMT_Package'

export default function Loader() {
    return (
        <>
            <style>{`
        /* Assuming base font size of 16px, so 1rem = 16px */

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading-wide {
    width: 17.375rem;
    height: 17.375rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.color {
  background-color: #3395ff;
}

.l1 {
  width: 0.9375rem; /* 15px / 16px */
  height: 4.0625rem; /* 65px / 16px */
  position: absolute;
  animation: move-h 1.2s infinite cubic-bezier(0.65, 0.05, 0.36, 1);
}

.l2 {
  width: 0.9375rem; /* 15px / 16px */
  height: 3.75rem;  /* 60px / 16px */
  position: absolute;
  transform: rotate(90deg);
  animation: move-v 1.2s infinite cubic-bezier(0.65, 0.05, 0.36, 1);
}

@keyframes move-h {
  0% {
    top: 0;
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  50% {
    top: 30%;
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    top: 100%;
    opacity: 0;
  }
}

@keyframes move-v {
  0% {
    left: 0;
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  50% {
    left: 45%;
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    left: 100%;
    opacity: 0;
  }
}

.animation-effect-light {
  animation: effect 0.2s 0.1s infinite linear;
}

.animation-effect-light-d {
  animation: effect 0.3s 0.2s infinite linear;
}

.animation-effect-rot {
  animation: rot 0.8s infinite cubic-bezier(0.65, 0.05, 0.36, 1);
}

.animation-effect-scale {
  animation: scale 0.8s infinite cubic-bezier(0.65, 0.05, 0.36, 1);
}

@keyframes effect {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes rot {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes scale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.9);
  }
  100% {
    transform: scale(1);
  }
}

.e1 {
  width: 0.0625rem; /* 1px / 16px */
  height: 2.5rem;   /* 40px / 16px */
  opacity: 0.3;
  position: absolute;
  top: 0;
  left: 0.5rem;    /* 8px / 16px */
}

.e2 {
  width: 3.75rem;  /* 60px / 16px */
  height: 0.0625rem; /* 1px / 16px */
  opacity: 0.8;
  position: absolute;
  top: 0.5rem;    /* 8px / 16px */
  left: 0;
}

.e3 {
  position: absolute;
  top: 0.625rem;  /* 10px / 16px */
  left: 0.75rem;  /* 12px / 16px */
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 900;
  font-size: 1.125rem;  /* 18px / 16px */
  color: #3395ff;
}

.e4 {
  width: 0.0625rem; /* 1px / 16px */
  height: 2.5rem;   /* 40px / 16px */
  opacity: 0.3;
  position: absolute;
  top: 5.625rem;   /* 90px / 16px */
  right: 0.625rem; /* 10px / 16px */
}

.e5 {
  width: 2.5rem;   /* 40px / 16px */
  height: 0.0625rem; /* 1px / 16px */
  opacity: 0.3;
  position: absolute;
  top: 6.25rem;    /* 100px / 16px */
  right: 0;
}

.e6 {
  position: absolute;
  top: 6.25rem;    /* 100px / 16px */
  right: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 2rem;  /* 32px / 16px */
  color: #3395ff;
}

.e7 {
  width: 0.0625rem; /* 1px / 16px */
  height: 1.25rem;  /* 20px / 16px */
  position: absolute;
  bottom: 0;
  left: 0;
  transform: rotate(45deg);
  animation: height 1s infinite cubic-bezier(0.65, 0.05, 0.36, 1);
}

@keyframes height {
  0% {
    bottom: 0%;
    left: 0%;
    height: 0;
  }
  25% {
    height: 5.625rem; /* 90px / 16px */
  }
  50% {
    bottom: 100%;
    left: 100%;
    height: 5.625rem; /* 90px / 16px */
  }
  75% {
    height: 0;
  }
  100% {
    bottom: 0%;
    left: 0%;
    height: 0;
  }
}

.e8 {
  width: 1.25rem;  /* 20px / 16px */
  height: 0.0625rem; /* 1px / 16px */
  position: absolute;
  bottom: 50%;
  left: 0;
  animation: width 1.5s infinite cubic-bezier(0.65, 0.05, 0.36, 1);
}

@keyframes width {
  0% {
    left: 0%;
    width: 0;
  }
  50% {
    left: 100%;
    width: 5.625rem; /* 90px / 16px */
  }
  100% {
    left: 0%;
    width: 0;
  }
}

        `}</style>
            <div className="loading">
                <div className="loading-wide">
                    <div className="l1 color" />
                    <div className="l2 color" />
                    <div className="e1 color animation-effect-light" />
                    <div className="e2 color animation-effect-light-d" />
                    <div className="e3 animation-effect-rot">X</div>
                    <div className="e4 color animation-effect-light" />
                    <div className="e5 color animation-effect-light-d" />
                    <div className="e6 animation-effect-scale">*</div>
                    <div className="e7 color" />
                    <div className="e8 color" />
                </div>
            </div>
            <CounterUp size={2} weight={"bold"} start={0} end={100} time={12} />
        </>

    )
}
