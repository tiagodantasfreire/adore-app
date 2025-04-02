interface ErrorTextProps {
  text: string | null
}

export default function ErrorText({ text }: ErrorTextProps) {
  if (!text) return null
  return <p className="text-red-500 text-sm my-1">{text}</p>
}
