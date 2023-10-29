import { useEffect, useRef, useState } from "react";
import { inputTypes } from "../../interfaces/inputTypes";
import gsap from "gsap";
// import gsap from "gsap";

export const InputField = (props: inputTypes) => {
  const { id, label, className } = props;
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState(props.value);
  const labelRef = useRef(null);
  // console.log(props);
  useEffect(() => {
    document.getElementById(id)?.focus();
    document.getElementById(id)?.blur();
  }, [id]);

  const handleChange = (e) => {
    // console.log(props);
    if (!props.onChange) {
      setValue(e.target.value);

      // if(value.length)
    }
  };

  // useEffect(() => {
  //   if (focused) {
  //     gsap.to(labelRef.current, {
  //       top: -27,
  //       duration: 0.5,
  //     });
  //   } else {
  //     gsap.to(labelRef.current, {
  //       top: 0,
  //       duration: 0.5,
  //     });
  //   }
  // }, [focused]);

  useEffect(() => {
    // console.log(value);
    if (focused) {
      gsap.to(labelRef.current, {
        top: -27,
        duration: 0.5,
      });
    } else {
      if (props.value) {
        if (props.value.length > 0) {
          gsap.to(labelRef.current, {
            top: -27,
            duration: 0.5,
          });
        } else {
          gsap.to(labelRef.current, {
            top: 0,
            duration: 0.5,
          });
        }
      }
    }
  }, [focused, props.value, props.value?.length]);

  return (
    <>
      {/* <label className="text-white capitalize ml-1 text-left" htmlFor={id}>
        {label}
      </label>
      <br /> */}
      <div className="relative mt-5">
        <label
          htmlFor={id}
          className={`absolute ml-4 my-auto leading-[2.5] transition duration-[1s] pointer-events-none font-semibold`}
          ref={labelRef}
        >
          {label}
        </label>
        <input
          {...props}
          value={props.value}
          onChange={handleChange}
          autoComplete="off"
          onFocus={() => setFocused(true)}
          onBlur={(e) => {
            setFocused(false);
            setValue(e.target.value);
          }}
          className={`px-4 py-2 focus:outline-none rounded-sm w-full mb-3 bg-[#00000000] border-b border-white disabled:cursor-not-allowed text-white ${className} appearance-none`}
        />
        <div className="absolute top-0 left-0">
          <i className="fa-solid fa-house text-black"></i>
        </div>
      </div>
    </>
  );
};

// export default InputField;
