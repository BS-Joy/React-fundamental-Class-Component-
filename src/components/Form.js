import React from "react";

export default class Form extends React.Component {
    state = {
        title: 'Python',
        desc: 'is awesom',
        frameworks: 'Django',
        isGood: true
    }

    handelChange = (event) => {
        const value = event.target.value;
        const checked = event.target.checked;
        const type = event.target.type;
        if(type === 'text') {
            this.setState({
                title: value
            });
        } 
        else if(type === 'textarea') {
            this.setState({
                desc: value
            });
        } 
        else if(type === 'select-one') {
            this.setState({
                frameworks: value
            });
        }
        else if(type === 'checkbox') {
            this.setState({
                isGood: checked
            });
        }
        else {
            console.log('Nothing Here');
        }
    }

    submitHandler = (event) => {
        const { title, desc, frameworks, isGood } = this.state;
        event.preventDefault();
        console.log(title, desc, frameworks, isGood);
    }
    render() {
        const { title, desc, frameworks, isGood } = this.state;
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    {/* text */}
                    <input 
                        type="text" 
                        placeholder="Title" 
                        value={title} 
                        onChange={this.handelChange} 
                    />
                    <br />
                    <br />
                    {/* textarea */}
                    <textarea 
                        name="text"
                        value={desc}
                        onChange={this.handelChange}
                    />
                    <br />
                    <br />
                    {/* select */}
                    <select value={frameworks} onChange={this.handelChange}>
                        <option value="React">React</option>
                        <option value="Django">Django</option>
                        <option value="Angular">Angular</option>
                        <option value=".Net">.Net</option>
                    </select>
                    <br />
                    <br />
                    {/* checkbox */}
                    <input name="react" type="checkbox" checked={isGood} onChange={this.handelChange} />
                    <label htmlFor="react">React</label>
                    <br />
                    {/*<input name="django" type="checkbox" checked={isGood} onChange={this.handelChange} />
                    <label htmlFor="django">Django</label>
                    <br />
                    <input name="laravel" type="checkbox" checked={isGood} onChange={this.handelChange} />
                    <label htmlFor="laravel">Laravel</label> */}
                    {/* submit */}
                    <input type="submit" value='submit' />
                </form>
            </div>
        );
    }
}