import Emoji from "./Emoji";

class Text extends Emoji{
    render(){

        const text = 'I love Python over javascript'

        const decoText = this.addEmoji(text, '🖤');

        return super.render(decoText);
    }
}

export default Text;