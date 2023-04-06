import { useRef, FormEvent } from "react";
import { useForm } from "react-hook-form";
import { FieldValue, FieldValues } from "react-hook-form/dist/types";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, { message: "Name must be atleast 3 characters" }),
  age: z
    .number({ invalid_type_error: "Age Field is required" })
    .min(18, { message: "Age must be atleast 18" }),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  const person = { name: "", age: 0 };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

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
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
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
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <button disabled={!isValid} className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
