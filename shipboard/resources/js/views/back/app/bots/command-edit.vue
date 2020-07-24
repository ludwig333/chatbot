<template>
    <v-modal ref="modal">
        <div class="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
            <div class="p-6">
                <img :src="'/imgs/platforms/bot.png'" height= "1%" width="10%">
                <h3 class="font-medium text-lg">Edit Command</h3>
            </div>
            <div class="flex flex-col px-8 pt-8 pb-8">
                <div class="mb-8">
                    <div class="form-group">
                        <label for="bot-command" class="form-label">Command</label>
                        <input id="bot-command" class="form-input" v-model="form.command">
                        <p class="invalid-feedback" v-if="$page.errors.has('command')">{{ $page.errors.first('command') }}</p>
                    </div>
                </div>

                <div class="mb-8">
                    <div class="form-group">
                        <label for="bot-response" class="form-label">Response</label>
                        <input id="bot-response" class="form-input" v-model="form.response">
                        <p class="invalid-feedback" v-if="$page.errors.has('response')">{{ $page.errors.first('response') }}</p>
                    </div>
                </div>
            </div>

            <div class="bg-gray-50 p-4 sm:px-8 sm:py-4 sm:flex sm:flex-row-reverse">
                <button type="button" class="btn btn-indigo" @click="update()" :disabled="form.processing">
                    Edit Command
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
            command : Object
        },

        data() {
            return {
                form: new Form({
                    command: '',
                    response: '',
                })
            }
        },

        mounted() {
            this.form.command = this.command.command;
            this.form.response = this.command.response
        },

        methods: {
            show() {
                this.$refs.modal.show();
            },

            hide() {
                this.$refs.modal.hide();
            },

            update() {
                this.form.processing = true;

                this.$inertia
                    .put(route('app:bots.command.update', {id: this.command.uuid}), this.form.data())
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
