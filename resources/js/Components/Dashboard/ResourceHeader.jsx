import ContentHeader from '@/Components/ContentView/ContentHeader';

export default function ResourceHeader({resource}) {
  return <ContentHeader title={resource} href={`/${resource}`} />;
}
