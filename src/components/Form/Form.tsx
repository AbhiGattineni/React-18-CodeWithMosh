import { useRef, FormEvent } from "react";
import { useForm } from "react-hook-form";
import { FieldValue, FieldValues } from "react-hook-form/dist/types";

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  const person = { name: "", age: 0 };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
          {...(register("name"), { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name?.type === "required" && <p>The name field is required.</p>}
        {errors.name?.type === "minLength" && (
          <p>The name field should be 3 characters.</p>
        )}
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
