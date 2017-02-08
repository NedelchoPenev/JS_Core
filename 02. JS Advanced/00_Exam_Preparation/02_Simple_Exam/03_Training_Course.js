class TrainingCourse {
    constructor(title, trainer) {
        this.title = title;
        this.trainer = trainer;
        this.topics = []
    }

    addTopic(title, date) {
        this.topics.push({title, date});
        this.topics.sort((a, b) => a.date - b.date);
        return this;
    }

    get firstTopic() {
        return this.topics[0];
    }

    get lastTopic() {
        return this.topics[this.topics.length - 1];
    }


    toString() {
        let output = `Course "${this.title}" by ${this.trainer}\n`;
        let topics = this.topics.map(t => ` * ${t.title} - ${t.date}`).join('\n');

        return output + topics;
    }
}
