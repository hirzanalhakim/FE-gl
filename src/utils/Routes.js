import Home from '../containers/Home';
import Friends from '../containers/Friends';
import MyCollection from '../containers/MyCollection';
import Profile from '../containers/Profile';

const Routes = [
  {
    path: '/',
    exact: true,
    // component: Loadable({
    //   loader: () => import('./../containers/Home'),
    //   loading() {
    //     return <Loader />
    //   }
    // })
    component: Home
  },
  {
    path: '/friends',
    exact: true,
    // component: Loadable({
    //   loader: () => import('./../containers/Home'),
    //   loading() {
    //     return <Loader />
    //   }
    // })
    component: Friends
  },
  {
    path: '/mycollection',
    exact: true,
    // component: Loadable({
    //   loader: () => import('./../containers/Home'),
    //   loading() {
    //     return <Loader />
    //   }
    // })
    component: MyCollection
  },
  {
    path: '/profile',
    exact: true,
    // component: Loadable({
    //   loader: () => import('./../containers/Home'),
    //   loading() {
    //     return <Loader />
    //   }
    // })
    component: Profile
  },
]

export default Routes;