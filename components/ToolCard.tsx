type Props = {
  title: string;
  description: string;
};

export default function ToolCard({ title, description }: Props) {
  return (
    <div className="border rounded-xl p-6">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}
