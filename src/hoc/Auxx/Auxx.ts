/**
 * Auxx wrapper
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

/**
 * Auxx hire order component
 *
 * @param {*} props
 * @return {*} children of the component
 * @constructor
 */
type Props = {
    children: JSX.Element[] | JSX.Element,
};

const Auxx = (props: Props | any) => props.children;

export default Auxx;