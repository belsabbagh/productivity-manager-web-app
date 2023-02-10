import {getUtilizationColor} from '@/lib';

export default function EmployeeUtilization({value, projectCount}) {
  return (
    <div className="flex flex-row justify-between items-center px-6">
      <div>
        <div className="flex flex-row pr-12">
          <div
            className="rounded-full p-2"
            style={{backgroundColor: getUtilizationColor(value)}}
          >
            {value}
          </div>
          <div className="p-2">{value > 1 ? 'OverUtilized' : ''}</div>
        </div>
      </div>
      <div>{projectCount > 1 ? 'CrossUtilized' : ''}</div>
    </div>
  );
}
