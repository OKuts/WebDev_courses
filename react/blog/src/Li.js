import React from 'react';

class Li extends React.Component {
    render() {
        let el = this.props.el;
        const showSection = this.props.show && <section>{el.text}</section>;
        const styles = {
            width: '50%'
        }
        let btn = this.props.onButtonClick;
        return (
            <div className='card mx-auto' style={styles}>
                <div className='card-header'>
                    <h2>
                        {el.title}
                        <button className='btn btn-primary float-right' onClick={btn}>{this.props.show ? "CLOSE" : "OPEN"}</button>
                    </h2>
                </div>
                <div className='card-body'>
                    <h6 className='card-subtitle text-muted'>
                        creation date: {(new Date(el.date).toDateString())}
                    </h6>
                    {showSection}
                </div>
            </div>
        )
    }
}

export default Li;