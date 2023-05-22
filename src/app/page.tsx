import DashboardBody from './components/DashboardBody';
import DashboardWorkout from './components/DashboardWorkout';
import NowDoingBoard from './components/NowDoingBoard';
import RecordBodyStatus from './components/RecordBodyStatus';
import WorkoutChain from './components/WorkoutChain';
import WorkoutToday from './components/WorkoutToday';
import WorkoutVideo from './components/WorkoutVideo';
import styles from './home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box1}>
        <div className={styles.mediumWidget}>
          <WorkoutToday />
        </div>
        <div className={styles.mediumWidget}>
          <WorkoutChain />
        </div>
      </div>
      <div className={styles.box2}>
        <div className={styles.box2Left}>
          <div className={styles.largeWidget}>
            <NowDoingBoard />
          </div>
        </div>
        <div className={styles.box2Right}>
          <div className={styles.mediumWidget}>
            <DashboardWorkout />
          </div>
          <div className={styles.mediumWidget}>
            <WorkoutVideo />
          </div>
        </div>
      </div>
      <div className={styles.box3}>
        <div className={styles.mediumWidget}>
          <RecordBodyStatus />
        </div>
        <div className={styles.mediumWidget}>
          <DashboardBody />
        </div>
      </div>
    </div>
  );
};

export default Home;
