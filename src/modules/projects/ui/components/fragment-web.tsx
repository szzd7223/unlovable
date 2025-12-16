import { Fragment } from "@/generated/prisma";

interface Props {
    data: Fragment
};

export function FragmentWeb({ data }: Props) {
    return (
        <div className="flex flex-col w-full h-full">
            <iframe
                className="h-full w-full"
                sandbox="allow-forms allow-scripts allow-same-origin"
                loading="lazy"
                src={data.sandboxUrl}
            />
        </div>
    )
};