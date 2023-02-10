import CreateResource from '@/Components/Inputs/CreateResource';

export default function IndexContent({
  indexQuery,
  canCreate,
  resource,
  children,
}) {
  return (
    <div className="rectangle bg-white items-center rounded-lg p-5">
      <div className="flex flex-row justify-between items-center">
        {indexQuery}
        {canCreate ? <CreateResource resource={resource} /> : null}
      </div>
      <div className={'mt-3 w-full'}>{children}</div>
    </div>
  );
}
