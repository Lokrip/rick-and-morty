import CharactersList from "@/features/Characters/characters-list/CharactersList";

export const revalidate = 60

export const dynamicParams = true

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const param = await searchParams;
  return (
    <main>
      <CharactersList param={param} />
    </main>
  );
}
