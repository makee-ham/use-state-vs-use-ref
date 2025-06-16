import { memo } from "react";
import { useValidate } from "../hooks";
import { twMerge } from "tailwind-merge";

const INPUT_CONFIGS = [
  { labelText: "Your name:", id: "username", name: "username", type: "text" },
  { labelText: "Your ID:", id: "userId", name: "userId", type: "text" },
];

export const RegisterForm = memo(({ values, onChange, classNames }) => {
  const { errors, validate } = useValidate({ username: "", userId: "" });

  const inputConfigs = INPUT_CONFIGS.map((config) => ({
    ...config,
    value: values[config.name],
    className: twMerge("", classNames ? classNames[config.name] : ""),
    onChange: (e) => onChange(e, validate),
    "data-idx": values.id,
  }));
  return (
    <div className="w-3xl border border-blue-600 p-4">
      {inputConfigs.map(({ labelText, ...config }) => (
        <div key={config.id}>
          <label>{labelText}</label>
          <input {...config} />
          {errors[config.name] && (
            <p style={{ color: "red" }}>{errors[config.name]}</p>
          )}
        </div>
      ))}
    </div>
  );
});
