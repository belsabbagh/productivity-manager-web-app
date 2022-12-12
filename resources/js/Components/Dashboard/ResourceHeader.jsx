import ContentHeader from "@/Components/ContentHeader";

export default function ResourceHeader({resource}) {
    return (
        <ContentHeader title={resource} href={`/${resource}`}/>
    );
}
