<template>
    <v-modal ref="modal">
        <div class="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
            <div class="p-6">
                <img :src="'/imgs/platforms/bot.png'" height= "1%" width="10%">
                <h3 class="font-medium text-lg">Delete Bot</h3>
            </div>
            <div class="px-6" v-if="$page.errors.has('plan.limit')">
                <v-alert variant="warning" show>
                    {{ $page.errors.first('plan.limit') }}
                </v-alert>
            </div>

            <div class="flex flex-col px-8 pt-8 pb-8">
                <div class="mb-8">
                    <div class="form-group">
                       <p>Are you sure you want to delete?</p>
                        <p class="invalid-feedback" v-if="$page.errors.has('name')">{{ $page.errors.first('name') }}</p>
                    </div>
                </div>

            </div>

            <div class="bg-gray-50 p-4 sm:px-8 sm:py-4 sm:flex sm:flex-row-reverse">
                <button type="button" class="btn btn-indigo" @click="store()" :disabled="form.processing">
                    Delete
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

        data() {
            return {
                form: new Form({
                    name: '',
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
                    .delete(route('app:bots.destroy',{id: this.$page.bot.uuid}));
            }
        }
    }
</script>
