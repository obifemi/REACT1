const Header = ({selectedTeam,teamMemberCount}) => {
    return (
        <header>
        <h1 className="mt-4 p5 bg-primary text-white rounded">Team Allocation</h1>
        <h3> Selected team {selectedTeam} has {teamMemberCount} members. </h3>
        </header>
    );
    };

    export default Header;