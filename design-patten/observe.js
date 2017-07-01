var observer = {
    addSubscriber: function (callback) {
        if (typeof callback === 'function') {
            this.subscribers[this.subscribers.length] = callback;
        }
    },
    removeSubscripber: function (callback) {
        for (var i = 0; i < this.subscribers.length; i++) {
            if (this.subscribers[i] === callback) {
                delete this.subscribers[i];
            }
        }
    },
    publish: function (what) {
        for (var i = 0; i < this.subscribers.length; i++) {
            if (typeof this.subscribers[i] === 'function') {
                this.subscribers[i](what);
            }
        }
    },
    make: function (o) {
        for (var i in this) {
            if (this.hasOwnProperty(i)) {
                o[i] = this[i];
            }
        }
        o.subscribers = [];
    }
}

var blogger = {
    writeBlogPost: function () {
        var content = 'Today is ' + new Date();
        this.publish(content);
    }
}

var ls_times = {
    newIssue: function () {
        var paper = 'This is an new paper';
        this.publish(paper);
    }
}

observer.make(blogger);
observer.make(ls_times);

var jack = {
    read: function(what){
        console.log("Jack:" + what);
    }
}

var jill = {
    gossip: function(what){
        console.log("Jill:" + what);
    }
}

blogger.addSubscriber(jack.read);
blogger.addSubscriber(jill.gossip);
blogger.writeBlogPost();

blogger.removeSubscripber(jack.read);
blogger.writeBlogPost();

ls_times.addSubscriber(jill.gossip);
ls_times.newIssue();