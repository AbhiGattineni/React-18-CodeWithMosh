import { useRef, FormEvent } from "react";
import { useForm } from "react-hook-form";
import { FieldValue, FieldValues } from "react-hook-form/dist/types";

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  const person = { name: "", age: 0 };

  const { register, handleSubmit } = useForm();

  //   const handleSubmit = (e: FormEvent) => {
  //     e.preventDefault();
  //     nameRef.current !== null ? (person.name = nameRef.current.value) : "";
  //     ageRef.current !== null
  //       ? (person.age = parseInt(ageRef.current.value))
  //       : "";
  //     console.log(person);
  //   };

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;
