// Chat input with gradient border matching the Figma Form2 design
// Uses the exact border color (#299fb1), radius, padding, and send button from the import

import type { ContextChip } from "../hooks/useChat";
import sendSvgPaths from "../../imports/svg-wzm5gmq05b";
import { CHAT_PANEL } from "../constants/strings";

// LAYOUT — Props

interface ChatInputProps {
  inputValue: string;
  onInputChange: (value: string) => void;
  onSend: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  onInput: () => void;
  textareaRef: React.RefObject<HTMLTextAreaElement | null>;
  contextChips: ContextChip[];
  onRemoveChip: (chipId: string) => void;
}

// LAYOUT — Component

/** Gradient-bordered chat input with context chips and send button */
export function ChatInput({
  inputValue,
  onInputChange,
  onSend,
  onKeyDown,
  onInput,
  textareaRef,
  contextChips,
  onRemoveChip,
}: ChatInputProps) {
  // COPY
  const placeholder = contextChips.length > 0 ? CHAT_PANEL.inputPlaceholderWithChips : CHAT_PANEL.inputPlaceholder;

  return (
    // LAYOUT
    <div className="shrink-0 w-full pb-[16px] px-[16px]">
      <div
        className="bg-card relative rounded-[var(--radius-card)] w-full"
        style={{ padding: "12px 16px" }}
      >
        {/* Border overlay — gradient stroke from Figma Form2 */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none rounded-[var(--radius-card)] z-0"
          style={{
            border: "1px solid var(--ring)",
            borderRadius: "var(--radius-card)",
            boxShadow:
              "109px 82px 38px 0px rgba(147,195,75,0), 70px 52px 35px 0px rgba(147,195,75,0.01), 39px 29px 29px 0px rgba(147,195,75,0.03), 17px 13px 22px 0px rgba(147,195,75,0.06), 4px 3px 12px 0px rgba(147,195,75,0.07)",
          }}
        />

        <div className="flex flex-col gap-[4px] w-full relative z-10">
          {/* INTERACTION — Context chips */}
          {contextChips.length > 0 && (
            <div className="flex flex-wrap gap-[4px] max-w-full overflow-hidden">
              {contextChips.map((chip) => (
                <div key={chip.id} className="bg-muted flex items-center px-[4px] rounded-[var(--radius-button)] h-[24px] gap-[4px] max-w-full min-w-0">
                  <p
                    className="text-foreground overflow-hidden text-ellipsis whitespace-nowrap min-w-0"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "var(--text-base)",
                      fontWeight: "var(--font-weight-normal)",
                      lineHeight: "1.5",
                      fontFeatureSettings: "'cv08', 'lnum', 'tnum'",
                    }}
                  >
                    {chip.path}
                  </p>
                  <button
                    type="button"
                    className="shrink-0 size-[14px] flex items-center justify-center cursor-pointer hover:opacity-60 transition-opacity"
                    onClick={() => onRemoveChip(chip.id)}
                  >
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M1 1L7 7M7 1L1 7" stroke="var(--secondary-foreground)" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* LAYOUT — Input row with send button */}
          <div className="flex items-end gap-[8px] w-full">
            <textarea
              ref={textareaRef}
              value={inputValue}
              onChange={(e) => {
                onInputChange(e.target.value);
                onInput();
              }}
              onKeyDown={onKeyDown}
              placeholder={placeholder}
              rows={2}
              className="chat-input-textarea flex-1 bg-transparent outline-none resize-none min-h-[42px] max-h-[120px]"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "var(--text-base)",
                fontWeight: "var(--font-weight-normal)",
                lineHeight: "1.5",
                color: "var(--foreground)",
              }}
            />

            {/* Send button — gradient icon from Figma Form2 */}
            <button
              type="button"
              className="shrink-0 size-[32px] cursor-pointer hover:opacity-80 transition-opacity flex items-center justify-center mb-[2px]"
              onClick={onSend}
            >
              <svg className="block size-[24px]" fill="none" viewBox="0 0 24 24">
                <path
                  d={sendSvgPaths.p1e43b980}
                  fill="url(#paint0_linear_chat_send)"
                />
                <defs>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint0_linear_chat_send"
                    x1="1.71406"
                    x2="22.2855"
                    y1="12.0015"
                    y2="12.0015"
                  >
                    <stop stopColor="var(--ring)" />
                    <stop offset="0.66" stopColor="var(--chart-5)" />
                    <stop offset="1" stopColor="var(--chart-5)" />
                  </linearGradient>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Placeholder color override — uses muted-foreground (disabled text) */}
      <style>{`
        .chat-input-textarea::placeholder {
          color: var(--muted-foreground);
          opacity: 1;
        }
      `}</style>
    </div>
  );
}