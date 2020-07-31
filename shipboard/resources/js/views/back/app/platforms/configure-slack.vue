<template>
    <v-modal ref="modal">
        <div class="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
            <div class="p-6">
                <div class="row">
                    <div class="col">
                        <img :src="'/imgs/platforms/slack.png'" height= "10%" width="10%">
                    </div>
                    <div class="col">
                        <h3 class="font-medium text-lg">Configure</h3>
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
                        <label for="bot-access_token" class="form-label">Access Token</label>
                        <input id="bot-access_token" class="form-input" v-model="form.access_token">
                        <p class="invalid-feedback" v-if="$page.errors.has('access_token')">{{ $page.errors.first('access_token') }}</p>
                    </div>
                </div>

                <div class="mb-8">
                    <div class="form-group">
                        <label class="form-label">Subscription URL</label>
                        <input class="form-input" disabled :value="this.$props.url+'/slack/'+this.$props.bot.uuid">
                    </div>
                </div>

                <div class="mb-8">
                    <div class="form-group">
                        <label class="form-label">Connect Status</label>
                        <select class="form-input" v-model=form.connect_status>
                            <option disabled value="">Please select one</option>
                            <option value="1">Active</option>
                            <option value="0">Inactive</option>
                        </select>
                        <p class="invalid-feedback" v-if="$page.errors.has('connect_status')">{{ $page.errors.first('connect_status') }}</p>
                    </div>
                </div>
            </div>

            <div class="bg-gray-50 p-4 sm:px-8 sm:py-4 sm:flex sm:flex-row-reverse">
                <button type="button" class="btn btn-indigo" @click="update()" :disabled="form.processing">
                    Save
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
            bot: Object,
            url: String
        },

        data() {
            return {
                form: new Form({
                    uuid: this.bot.uuid,
                    access_token: '',
                    platform : 'slack',
                    connect_status: ''
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
                    .put(route('app:bots.configure',{id: this.$page.bot.uuid}), this.form.data())
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
