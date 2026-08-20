type InputProps = {
  type?: string;
  placeholder?: string;
  name?: string;
};

export default function Input({
  type = "text",
  placeholder,
  name,
}: InputProps) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
    />
  );
}