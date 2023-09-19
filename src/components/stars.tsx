import { SolidStar } from "./solid-star";
import { EmptyStar } from "./empty-star";
import { Checkbox } from "./ui/checkbox";

type StarsProps = {
    solidStarsAmount: number
}

export const Stars = ( { solidStarsAmount } : StarsProps) => {
    const container = [<Checkbox className="mr-2"/>];

    for (let i = 0; i < 5; i++){
        if(i < solidStarsAmount) container.push(<SolidStar />)
        else container.push(<EmptyStar />)
    }
    return (
        <div className="flex flex-row items-center">
            {container}
        </div>
    );
}
