<template>
    <v-modal ref="modal">
        <div class="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
            <div class="flex flex-col px-8 pt-8 pb-8">
                <div class="mb-8">
                    <div class="form-group">
                        <label for="bot-command" class="form-label">Command</label>
                        <input id="bot-command" class="form-input" v-model="form.command">
                        <p class="invalid-feedback" v-if="$page.errors.has('command')">{{ $page.errors.first('command') }}</p>
                        <small>The command name that user sends to your bot.</small>
                    </div>
                </div>

                <div class="mb-8">
                    <div class="form-group">
                        <label for="bot-reply" class="form-label">Reply</label>
                        <input id="bot-reply" class="form-input" v-model="form.reply">
                        <p class="invalid-feedback" v-if="$page.errors.has('reply')">{{ $page.errors.first('reply') }}</p>
                        <small>The reply of the command.</small>
                    </div>
                </div>
            </div>

            <div class="bg-gray-50 p-4 sm:px-8 sm:py-4 sm:flex sm:flex-row-reverse">
                <button type="button" class="btn btn-indigo" @click="store()" :disabled="form.processing">
                    Store Command
                </button>

                <button type="button" class="btn btn-flat mr-3" @click="hide()">
                    {{ $trans('labels.cancel') }}
                </button>
            </div>
        </div>
    </v-modal>
</template>

<script>
    import VModal from '@/components/modal'
    import VAlert from '@/components/alert'
    import Form from '@/utils/form'

    export default {
        components: {
            VModal,
            VAlert,
        },

        props: {
            command: Object
        },

        data() {
            return {
                form: new Form({
                    command: this.command.command,
                    reply: this.command.reply,
                })
            }
        },

        methods: {
            show() {
                this.$refs.modal.show();
            },

            hide() {
                this.$refs.modal.hide();
            },

            store() {
                this.form.processing = true;

                this.$inertia
                    .post(route('app:bots.command.update'), this.form.data())
                    .then(() => {
                        this.form.processing = false;

                        if (this.$page.errors.none()) {
                            this.hide();
                            this.form.reset();
                        }
                    });
            }
        }
    }
</script>
