export default {
    props: {
        input: {
            type: String,
            required: true,
            default: "",
        },
    },
    data() {
        return {
            snackbar: false,
        };
    },
    methods: {
        copiarSpam() {
            let copyText = document.getElementById("spam");
            let textArea = document.createElement("textarea");
            textArea.value = copyText.textContent;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand("Copy");
            textArea.remove();
            this.snackbar = true;
        },
    },
};