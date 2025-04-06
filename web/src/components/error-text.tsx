interface ErrorTextProps {
  text: string | null
}

export default function ErrorText({ text }: ErrorTextProps) {
  if (!text) return null
  return <p className="text-destructive text-sm my-1">{text}</p>
}
