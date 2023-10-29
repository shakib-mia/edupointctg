import { FormEventHandler } from "react";
import { InputField } from "../InputField/InputField";
import { Button } from "../Button/Button";
interface propTypes {
  handleSubmit: FormEventHandler;
  fields: {
    label: string;
    id: string;
    type: string;
    name: string;
    placeholder?: string;
    required?: boolean;
    onChange?: () => void;
  }[];
  heading: string;
  submitText: string;
}

const Form = ({ handleSubmit, fields, heading, submitText }: propTypes) => {
  return (
    <form onSubmit={handleSubmit} className="w-full h-full text-white">
      <h1 className="font-medium text-3xl text-center">{heading}</h1>

      {/* <div className="flex"> */}
      {fields.map((item, key) => (
        <InputField {...item} key={key} />
      ))}
      {/* </div> */}
      <div className="text-center mt-0">
        <Button className="w-full" type="secondary">
          {submitText}
        </Button>
      </div>
    </form>
  );
};

export default Form;
