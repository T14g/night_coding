import React from 'react';
import { SectionTitle } from './home.styles';
import WorkoutTable from '../../components/workout-table/workout-table.component';
class Home extends React.Component {

    render() {
        return (
            <div>
                <WorkoutTable />
            </div>
        )
    }
}

export default Home;