import IState from './IState';

export default interface ListState extends IState {
  data: any;
  isError: boolean;
}
