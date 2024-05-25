import { OnboardingForm } from "@/components/ui/onboarding/OnboardingForm.tsx";
import { useOnboarding } from "@/hooks/api/useOnboarding.ts";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { Fragment, useRef, useState } from "react";

export const Onboarding = () => {
  const authenticatedUser = null;

  const { data, isLoading } = useOnboarding({
    discordUserId: authenticatedUser?.user_metadata.provider_id,
  });

  const [open, setOpen] = useState(!data?.onboarded);

  const cancelButtonRef = useRef(null);

  const showOnboarding = !isLoading && !data?.onboarded;

  return showOnboarding ? (
    <Transition show={open} as={Fragment}>
      <Dialog
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 z-auto w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 sm:mx-0 sm:h-10 sm:w-10">
                    <PencilSquareIcon
                      className="h-6 w-6 text-indigo-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900"
                    >
                      Add Review Weights
                    </DialogTitle>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Add your review weights to get started. This will orient
                        review scores to your preferences.
                      </p>
                      <p className="mt-1 text-sm italic text-gray-500">
                        Each weight should be a number between 0 and 10.
                      </p>
                    </div>
                    <OnboardingForm onSubmit={() => setOpen(false)} />
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  ) : null;
};
