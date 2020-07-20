<template>
    <v-modal ref="modal">
        <div class="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
            <div class="p-6">
                <div class="row">
                    <div class="col">
                        <img :src="'/imgs/platforms/telegram.png'" height= "10%" width="10%">
                    </div>
                    <div class="col">
                        <h3 class="font-medium text-lg">Edit</h3>
                    </div>
                </div>
            </div>
            <div class="px-6" v-if="$page.errors.has('plan.limit')">
                <v-alert variant="warning" show>
                    {{ $page.errors.first('plan.limit') }}
                </v-alert>
            </div>

            <div class="flex flex-col px-8 pt-8 pb-8">
                <div class="mb-8">
                    <div class="form-group">
                        <label for="bot-name" class="form-label">{{ $trans('labels.name') }}</label>
                        <input id="bot-name" class="form-input" v-model="form.name">
                        <p class="invalid-feedback" v-if="$page.errors.has('name')">{{ $page.errors.first('name') }}</p>
                        <small>This is the name of your bot which is display when any one start it.</small>
                    </div>
                </div>

                <div class="mb-8">
                    <div class="form-group">
                        <label for="bot-welcome-text" class="form-label">Welcome Text</label>
                        <input id="bot-welcome-text" class="form-input" v-model="form.welcome_text">
                        <p class="invalid-feedback" v-if="$page.errors.has('welcome_text')">{{ $page.errors.first('welcome_text') }}</p>
                        <small>This is the text shown when your bot is connected.</small>
                    </div>
                </div>

                <div class="mb-8">
                    <div class="form-group">
                        <label for="bot-username" class="form-label">Username</label>
                        <input id="bot-username" class="form-input" v-model="form.username">
                        <p class="invalid-feedback" v-if="$page.errors.has('username')">{{ $page.errors.first('username') }}</p>
                        <small>Its your bot username.</small>
                    </div>
                </div>

                <div class="mb-8">
                    <div class="form-group">
                        <label for="bot-access-key" class="form-label">Access Key</label>
                        <input id="bot-access-key" class="form-input" v-model="form.access_key">
                        <p class="invalid-feedback" v-if="$page.errors.has('access_key')">{{ $page.errors.first('access_key') }}</p>
                        <small>When you create bot from @BotFather you get access key.</small>
                    </div>
                </div>
            </div>

            <div class="bg-gray-50 p-4 sm:px-8 sm:py-4 sm:flex sm:flex-row-reverse">
                <button type="button" class="btn btn-indigo" @click="update()" :disabled="form.processing">
                   Edit
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
            bot: Object
        },
        data() {
            return {
                form: new Form({
                    uuid: this.bot.uuid,
                    name: this.bot.name,
                    welcome_text: this.bot.welcome_text,
                    username: this.bot.username,
                    access_key: this.bot.access_key
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

            update() {
                this.form.processing = true;

                this.$inertia
                    .put(route('app:bots.update',{bot: this.$page.bot.uuid}), this.form.data())
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
