interface TagProps {
  text: string;
  color: string;
}

export function Tag({ text, color }: TagProps) {
  return (
    <div className={`bg-${color}-500 rounded-full py-0 px-2 items-center flex`}>
      <p className="text-xs font-bold uppercase">{text}</p>
    </div>
  );
}
