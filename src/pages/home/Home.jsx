import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/Navbar'
import Recommendations from '../../components/recomendations/Recommendations'
import './home.scss'

export default function Home() {
    return (
        <div className="home">
            <Navbar />
            <Featured type="movie"/>
            <Recommendations title="For You"/>
            <Recommendations title="Action"/>
            <Recommendations title="Action"/>
            <Recommendations title="Action"/>
        </div>
    )
}
