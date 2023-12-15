import {TrashIcon} from "@heroicons/react/24/solid/index.js";

export const Delete = ({onDelete}) => (
  <button onClick={onDelete}>
    <TrashIcon className="h-6 w-6 text-red-500" />
  </button>
)
