import NavItem from "@/Components/PracticeNavBar/NavItem";
import {Home, Person, PieChart} from "@mui/icons-material";

export default function NavBar({active}) {
    return (
        <div className={'flex-col w-fit h-fit p-4'}>
            <NavItem href={'/dashboard'}>
                <Home/>
            </NavItem>
            <NavItem href={'/charts'}>
                <PieChart/>
            </NavItem>
            <NavItem href={'/profile'}>
                <Person/>
            </NavItem>
        </div>
    )
}
