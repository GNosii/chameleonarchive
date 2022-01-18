import IProps from './IProps';

export default interface ListItemProps extends IProps {
    title: string
    description: string
    link_to?: string
}